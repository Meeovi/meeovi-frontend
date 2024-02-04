import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Main_categoryOrderByWithAggregationInput } from "../../../inputs/Main_categoryOrderByWithAggregationInput";
import { Main_categoryScalarWhereWithAggregatesInput } from "../../../inputs/Main_categoryScalarWhereWithAggregatesInput";
import { Main_categoryWhereInput } from "../../../inputs/Main_categoryWhereInput";
import { Main_categoryScalarFieldEnum } from "../../../../enums/Main_categoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMain_categoryArgs {
  @TypeGraphQL.Field(_type => Main_categoryWhereInput, {
    nullable: true
  })
  where?: Main_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Main_categoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "product_id" | "product_version_id" | "category_id" | "category_version_id" | "sales_channel_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Main_categoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Main_categoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
