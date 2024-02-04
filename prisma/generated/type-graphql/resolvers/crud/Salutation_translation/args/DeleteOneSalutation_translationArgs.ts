import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Salutation_translationWhereUniqueInput } from "../../../inputs/Salutation_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSalutation_translationArgs {
  @TypeGraphQL.Field(_type => Salutation_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Salutation_translationWhereUniqueInput;
}
