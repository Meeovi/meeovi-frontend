import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemeUpdateManyMutationInput } from "../../../inputs/ThemeUpdateManyMutationInput";
import { ThemeWhereInput } from "../../../inputs/ThemeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyThemeArgs {
  @TypeGraphQL.Field(_type => ThemeUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThemeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ThemeWhereInput, {
    nullable: true
  })
  where?: ThemeWhereInput | undefined;
}
