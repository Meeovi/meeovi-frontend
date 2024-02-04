import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_mediaUpdateManyMutationInput } from "../../../inputs/Product_mediaUpdateManyMutationInput";
import { Product_mediaWhereInput } from "../../../inputs/Product_mediaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_mediaArgs {
  @TypeGraphQL.Field(_type => Product_mediaUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_mediaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_mediaWhereInput, {
    nullable: true
  })
  where?: Product_mediaWhereInput | undefined;
}
