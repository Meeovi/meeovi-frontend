import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_translationOrderByWithAggregationInput } from "../../../inputs/Customer_group_translationOrderByWithAggregationInput";
import { Customer_group_translationScalarWhereWithAggregatesInput } from "../../../inputs/Customer_group_translationScalarWhereWithAggregatesInput";
import { Customer_group_translationWhereInput } from "../../../inputs/Customer_group_translationWhereInput";
import { Customer_group_translationScalarFieldEnum } from "../../../../enums/Customer_group_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomer_group_translationArgs {
  @TypeGraphQL.Field(_type => Customer_group_translationWhereInput, {
    nullable: true
  })
  where?: Customer_group_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Customer_group_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"customer_group_id" | "language_id" | "name" | "custom_fields" | "registration_title" | "registration_introduction" | "registration_only_company_registration" | "registration_seo_meta_description" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Customer_group_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Customer_group_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
