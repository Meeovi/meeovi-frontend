import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturerOrderByWithAggregationInput } from "../../../inputs/Product_manufacturerOrderByWithAggregationInput";
import { Product_manufacturerScalarWhereWithAggregatesInput } from "../../../inputs/Product_manufacturerScalarWhereWithAggregatesInput";
import { Product_manufacturerWhereInput } from "../../../inputs/Product_manufacturerWhereInput";
import { Product_manufacturerScalarFieldEnum } from "../../../../enums/Product_manufacturerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_manufacturerArgs {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  where?: Product_manufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_manufacturerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "link" | "media_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_manufacturerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_manufacturerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
