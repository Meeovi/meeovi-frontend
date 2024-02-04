import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_translationUpdateInput } from "../../../inputs/Theme_translationUpdateInput";
import { Theme_translationWhereUniqueInput } from "../../../inputs/Theme_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTheme_translationArgs {
  @TypeGraphQL.Field(_type => Theme_translationUpdateInput, {
    nullable: false
  })
  data!: Theme_translationUpdateInput;

  @TypeGraphQL.Field(_type => Theme_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Theme_translationWhereUniqueInput;
}
