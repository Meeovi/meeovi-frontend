import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_tagOrderByWithAggregationInput } from "../../../inputs/Product_tagOrderByWithAggregationInput";
import { Product_tagScalarWhereWithAggregatesInput } from "../../../inputs/Product_tagScalarWhereWithAggregatesInput";
import { Product_tagWhereInput } from "../../../inputs/Product_tagWhereInput";
import { Product_tagScalarFieldEnum } from "../../../../enums/Product_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_tagArgs {
  @TypeGraphQL.Field(_type => Product_tagWhereInput, {
    nullable: true
  })
  where?: Product_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_tagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_tagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_id" | "product_version_id" | "tag_id">;

  @TypeGraphQL.Field(_type => Product_tagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_tagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
