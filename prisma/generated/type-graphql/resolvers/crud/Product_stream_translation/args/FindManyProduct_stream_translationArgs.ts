import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_stream_translationOrderByWithRelationAndSearchRelevanceInput";
import { Product_stream_translationWhereInput } from "../../../inputs/Product_stream_translationWhereInput";
import { Product_stream_translationWhereUniqueInput } from "../../../inputs/Product_stream_translationWhereUniqueInput";
import { Product_stream_translationScalarFieldEnum } from "../../../../enums/Product_stream_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_stream_translationArgs {
  @TypeGraphQL.Field(_type => Product_stream_translationWhereInput, {
    nullable: true
  })
  where?: Product_stream_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_stream_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_stream_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product_stream_id" | "language_id" | "name" | "description" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
