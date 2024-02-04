import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartCreateInput } from "../../../inputs/CartCreateInput";
import { CartUpdateInput } from "../../../inputs/CartUpdateInput";
import { CartWhereUniqueInput } from "../../../inputs/CartWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCartArgs {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartCreateInput, {
    nullable: false
  })
  create!: CartCreateInput;

  @TypeGraphQL.Field(_type => CartUpdateInput, {
    nullable: false
  })
  update!: CartUpdateInput;
}
