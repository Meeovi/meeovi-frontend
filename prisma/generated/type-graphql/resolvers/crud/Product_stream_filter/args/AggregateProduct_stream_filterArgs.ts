import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_filterOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_stream_filterOrderByWithRelationAndSearchRelevanceInput";
import { Product_stream_filterWhereInput } from "../../../inputs/Product_stream_filterWhereInput";
import { Product_stream_filterWhereUniqueInput } from "../../../inputs/Product_stream_filterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProduct_stream_filterArgs {
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
}
