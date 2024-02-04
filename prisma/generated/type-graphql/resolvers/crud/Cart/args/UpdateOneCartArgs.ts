import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartUpdateInput } from "../../../inputs/CartUpdateInput";
import { CartWhereUniqueInput } from "../../../inputs/CartWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCartArgs {
  @TypeGraphQL.Field(_type => CartUpdateInput, {
    nullable: false
  })
  data!: CartUpdateInput;

  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;
}
