import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_translationOrderByWithAggregationInput } from "../../../inputs/Product_stream_translationOrderByWithAggregationInput";
import { Product_stream_translationScalarWhereWithAggregatesInput } from "../../../inputs/Product_stream_translationScalarWhereWithAggregatesInput";
import { Product_stream_translationWhereInput } from "../../../inputs/Product_stream_translationWhereInput";
import { Product_stream_translationScalarFieldEnum } from "../../../../enums/Product_stream_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_stream_translationArgs {
  @TypeGraphQL.Field(_type => Product_stream_translationWhereInput, {
    nullable: true
  })
  where?: Product_stream_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_stream_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_stream_id" | "language_id" | "name" | "description" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_stream_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_stream_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
