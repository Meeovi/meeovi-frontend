import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_visibilityUpdateManyMutationInput } from "../../../inputs/Product_visibilityUpdateManyMutationInput";
import { Product_visibilityWhereInput } from "../../../inputs/Product_visibilityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_visibilityArgs {
  @TypeGraphQL.Field(_type => Product_visibilityUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_visibilityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_visibilityWhereInput, {
    nullable: true
  })
  where?: Product_visibilityWhereInput | undefined;
}
