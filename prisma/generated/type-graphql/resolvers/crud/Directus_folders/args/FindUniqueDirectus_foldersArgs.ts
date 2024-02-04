import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_foldersWhereUniqueInput } from "../../../inputs/Directus_foldersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDirectus_foldersArgs {
  @TypeGraphQL.Field(_type => Directus_foldersWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_foldersWhereUniqueInput;
}
