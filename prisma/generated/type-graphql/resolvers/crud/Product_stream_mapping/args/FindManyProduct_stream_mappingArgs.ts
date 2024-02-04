import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_mappingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_stream_mappingOrderByWithRelationAndSearchRelevanceInput";
import { Product_stream_mappingWhereInput } from "../../../inputs/Product_stream_mappingWhereInput";
import { Product_stream_mappingWhereUniqueInput } from "../../../inputs/Product_stream_mappingWhereUniqueInput";
import { Product_stream_mappingScalarFieldEnum } from "../../../../enums/Product_stream_mappingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_stream_mappingArgs {
  @TypeGraphQL.Field(_type => Product_stream_mappingWhereInput, {
    nullable: true
  })
  where?: Product_stream_mappingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_stream_mappingOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_stream_mappingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product_id" | "product_version_id" | "product_stream_id"> | undefined;
}
