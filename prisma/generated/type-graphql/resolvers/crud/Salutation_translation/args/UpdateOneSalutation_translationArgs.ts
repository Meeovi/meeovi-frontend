import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Salutation_translationUpdateInput } from "../../../inputs/Salutation_translationUpdateInput";
import { Salutation_translationWhereUniqueInput } from "../../../inputs/Salutation_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSalutation_translationArgs {
  @TypeGraphQL.Field(_type => Salutation_translationUpdateInput, {
    nullable: false
  })
  data!: Salutation_translationUpdateInput;

  @TypeGraphQL.Field(_type => Salutation_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Salutation_translationWhereUniqueInput;
}
