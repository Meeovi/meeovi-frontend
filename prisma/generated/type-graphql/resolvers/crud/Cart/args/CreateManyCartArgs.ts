import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartCreateManyInput } from "../../../inputs/CartCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCartArgs {
  @TypeGraphQL.Field(_type => [CartCreateManyInput], {
    nullable: false
  })
  data!: CartCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
