import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Salutation_translationCreateInput } from "../../../inputs/Salutation_translationCreateInput";
import { Salutation_translationUpdateInput } from "../../../inputs/Salutation_translationUpdateInput";
import { Salutation_translationWhereUniqueInput } from "../../../inputs/Salutation_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSalutation_translationArgs {
  @TypeGraphQL.Field(_type => Salutation_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Salutation_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Salutation_translationCreateInput, {
    nullable: false
  })
  create!: Salutation_translationCreateInput;

  @TypeGraphQL.Field(_type => Salutation_translationUpdateInput, {
    nullable: false
  })
  update!: Salutation_translationUpdateInput;
}
