import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Customer_group_translationOrderByWithRelationAndSearchRelevanceInput";
import { Customer_group_translationWhereInput } from "../../../inputs/Customer_group_translationWhereInput";
import { Customer_group_translationWhereUniqueInput } from "../../../inputs/Customer_group_translationWhereUniqueInput";
import { Customer_group_translationScalarFieldEnum } from "../../../../enums/Customer_group_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCustomer_group_translationArgs {
  @TypeGraphQL.Field(_type => Customer_group_translationWhereInput, {
    nullable: true
  })
  where?: Customer_group_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Customer_group_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Customer_group_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"customer_group_id" | "language_id" | "name" | "custom_fields" | "registration_title" | "registration_introduction" | "registration_only_company_registration" | "registration_seo_meta_description" | "created_at" | "updated_at"> | undefined;
}
