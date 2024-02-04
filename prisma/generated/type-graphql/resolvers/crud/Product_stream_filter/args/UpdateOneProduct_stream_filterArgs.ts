import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_filterUpdateInput } from "../../../inputs/Product_stream_filterUpdateInput";
import { Product_stream_filterWhereUniqueInput } from "../../../inputs/Product_stream_filterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_stream_filterArgs {
  @TypeGraphQL.Field(_type => Product_stream_filterUpdateInput, {
    nullable: false
  })
  data!: Product_stream_filterUpdateInput;

  @TypeGraphQL.Field(_type => Product_stream_filterWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_filterWhereUniqueInput;
}
