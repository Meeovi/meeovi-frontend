import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Plugin_translationUpdateInput } from "../../../inputs/Plugin_translationUpdateInput";
import { Plugin_translationWhereUniqueInput } from "../../../inputs/Plugin_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePlugin_translationArgs {
  @TypeGraphQL.Field(_type => Plugin_translationUpdateInput, {
    nullable: false
  })
  data!: Plugin_translationUpdateInput;

  @TypeGraphQL.Field(_type => Plugin_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Plugin_translationWhereUniqueInput;
}
