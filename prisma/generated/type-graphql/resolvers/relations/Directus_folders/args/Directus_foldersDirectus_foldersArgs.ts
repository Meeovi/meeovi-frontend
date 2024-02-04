import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_foldersWhereInput } from "../../../inputs/Directus_foldersWhereInput";

@TypeGraphQL.ArgsType()
export class Directus_foldersDirectus_foldersArgs {
  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  where?: Directus_foldersWhereInput | undefined;
}
