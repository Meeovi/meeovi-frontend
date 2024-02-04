import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesCreateManyDirectus_users_directus_files_uploaded_byTodirectus_usersInputEnvelope } from "../inputs/Directus_filesCreateManyDirectus_users_directus_files_uploaded_byTodirectus_usersInputEnvelope";
import { Directus_filesCreateOrConnectWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput } from "../inputs/Directus_filesCreateOrConnectWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput";
import { Directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput } from "../inputs/Directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput";
import { Directus_filesWhereUniqueInput } from "../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.InputType("Directus_filesCreateNestedManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput", {})
export class Directus_filesCreateNestedManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput {
  @TypeGraphQL.Field(_type => [Directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput], {
    nullable: true
  })
  create?: Directus_filesCreateWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesCreateOrConnectWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput], {
    nullable: true
  })
  connectOrCreate?: Directus_filesCreateOrConnectWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_filesCreateManyDirectus_users_directus_files_uploaded_byTodirectus_usersInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_filesCreateManyDirectus_users_directus_files_uploaded_byTodirectus_usersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_filesWhereUniqueInput[] | undefined;
}
