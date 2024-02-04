import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_translationUpdateManyMutationInput } from "../../../inputs/Product_stream_translationUpdateManyMutationInput";
import { Product_stream_translationWhereInput } from "../../../inputs/Product_stream_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_stream_translationArgs {
  @TypeGraphQL.Field(_type => Product_stream_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_stream_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_stream_translationWhereInput, {
    nullable: true
  })
  where?: Product_stream_translationWhereInput | undefined;
}
