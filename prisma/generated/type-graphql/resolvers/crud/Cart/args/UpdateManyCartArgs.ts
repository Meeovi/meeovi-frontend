import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartUpdateManyMutationInput } from "../../../inputs/CartUpdateManyMutationInput";
import { CartWhereInput } from "../../../inputs/CartWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCartArgs {
  @TypeGraphQL.Field(_type => CartUpdateManyMutationInput, {
    nullable: false
  })
  data!: CartUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CartWhereInput, {
    nullable: true
  })
  where?: CartWhereInput | undefined;
}
