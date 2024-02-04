import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_filterCreateInput } from "../../../inputs/Product_stream_filterCreateInput";
import { Product_stream_filterUpdateInput } from "../../../inputs/Product_stream_filterUpdateInput";
import { Product_stream_filterWhereUniqueInput } from "../../../inputs/Product_stream_filterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_stream_filterArgs {
  @TypeGraphQL.Field(_type => Product_stream_filterWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_filterWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_filterCreateInput, {
    nullable: false
  })
  create!: Product_stream_filterCreateInput;

  @TypeGraphQL.Field(_type => Product_stream_filterUpdateInput, {
    nullable: false
  })
  update!: Product_stream_filterUpdateInput;
}
