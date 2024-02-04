import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_usersWhereInput } from "../../../inputs/Directus_usersWhereInput";

@TypeGraphQL.ArgsType()
export class Directus_filesDirectus_users_directus_files_uploaded_byTodirectus_usersArgs {
  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  where?: Directus_usersWhereInput | undefined;
}
