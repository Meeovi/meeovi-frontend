import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_translationCreateInput } from "../../../inputs/Currency_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCurrency_translationArgs {
  @TypeGraphQL.Field(_type => Currency_translationCreateInput, {
    nullable: false
  })
  data!: Currency_translationCreateInput;
}
