import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInputEnvelope } from "../inputs/Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInputEnvelope";
import { Directus_filesCreateOrConnectWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_filesCreateOrConnectWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput";
import { Directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput";
import { Directus_filesScalarWhereInput } from "../inputs/Directus_filesScalarWhereInput";
import { Directus_filesUpdateManyWithWhereWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_filesUpdateManyWithWhereWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput";
import { Directus_filesUpdateWithWhereUniqueWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_filesUpdateWithWhereUniqueWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput";
import { Directus_filesUpsertWithWhereUniqueWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_filesUpsertWithWhereUniqueWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput";
import { Directus_filesWhereUniqueInput } from "../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.InputType("Directus_filesUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput", {})
export class Directus_filesUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput {
  @TypeGraphQL.Field(_type => [Directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput], {
    nullable: true
  })
  create?: Directus_filesCreateWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesCreateOrConnectWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput], {
    nullable: true
  })
  connectOrCreate?: Directus_filesCreateOrConnectWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesUpsertWithWhereUniqueWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput], {
    nullable: true
  })
  upsert?: Directus_filesUpsertWithWhereUniqueWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesWhereUniqueInput], {
    nullable: true
  })
  set?: Directus_filesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Directus_filesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesWhereUniqueInput], {
    nullable: true
  })
  delete?: Directus_filesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_filesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesUpdateWithWhereUniqueWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput], {
    nullable: true
  })
  update?: Directus_filesUpdateWithWhereUniqueWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesUpdateManyWithWhereWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput], {
    nullable: true
  })
  updateMany?: Directus_filesUpdateManyWithWhereWithoutDirectus_users_directus_files_modified_byTodirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Directus_filesScalarWhereInput[] | undefined;
}
