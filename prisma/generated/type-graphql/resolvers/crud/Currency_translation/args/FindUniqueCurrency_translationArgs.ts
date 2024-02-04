import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_translationWhereUniqueInput } from "../../../inputs/Currency_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCurrency_translationArgs {
  @TypeGraphQL.Field(_type => Currency_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_translationWhereUniqueInput;
}
