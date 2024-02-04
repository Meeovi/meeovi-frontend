import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartWhereUniqueInput } from "../../../inputs/CartWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCartOrThrowArgs {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;
}
