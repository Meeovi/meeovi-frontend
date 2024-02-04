import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_stream_translationOrderByWithRelationAndSearchRelevanceInput";
import { Product_stream_translationWhereInput } from "../../../inputs/Product_stream_translationWhereInput";
import { Product_stream_translationWhereUniqueInput } from "../../../inputs/Product_stream_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProduct_stream_translationArgs {
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
}
