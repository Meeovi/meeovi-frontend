import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_filterOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_stream_filterOrderByWithRelationAndSearchRelevanceInput";
import { Product_stream_filterWhereInput } from "../../../inputs/Product_stream_filterWhereInput";
import { Product_stream_filterWhereUniqueInput } from "../../../inputs/Product_stream_filterWhereUniqueInput";
import { Product_stream_filterScalarFieldEnum } from "../../../../enums/Product_stream_filterScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Product_streamProduct_stream_filterArgs {
  @TypeGraphQL.Field(_type => Product_stream_filterWhereInput, {
    nullable: true
  })
  where?: Product_stream_filterWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_stream_filterOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_stream_filterWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "product_stream_id" | "parent_id" | "type" | "field" | "operator" | "value" | "parameters" | "position" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
