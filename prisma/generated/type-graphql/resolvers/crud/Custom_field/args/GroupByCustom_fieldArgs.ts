import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_fieldOrderByWithAggregationInput } from "../../../inputs/Custom_fieldOrderByWithAggregationInput";
import { Custom_fieldScalarWhereWithAggregatesInput } from "../../../inputs/Custom_fieldScalarWhereWithAggregatesInput";
import { Custom_fieldWhereInput } from "../../../inputs/Custom_fieldWhereInput";
import { Custom_fieldScalarFieldEnum } from "../../../../enums/Custom_fieldScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustom_fieldArgs {
  @TypeGraphQL.Field(_type => Custom_fieldWhereInput, {
    nullable: true
  })
  where?: Custom_fieldWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Custom_fieldOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "type" | "config" | "active" | "set_id" | "created_at" | "updated_at" | "allow_customer_write" | "allow_cart_expose">;

  @TypeGraphQL.Field(_type => Custom_fieldScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Custom_fieldScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
