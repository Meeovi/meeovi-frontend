import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartCreateInput } from "../../../inputs/CartCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCartArgs {
  @TypeGraphQL.Field(_type => CartCreateInput, {
    nullable: false
  })
  data!: CartCreateInput;
}
