import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Salutation_translationCreateInput } from "../../../inputs/Salutation_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSalutation_translationArgs {
  @TypeGraphQL.Field(_type => Salutation_translationCreateInput, {
    nullable: false
  })
  data!: Salutation_translationCreateInput;
}
