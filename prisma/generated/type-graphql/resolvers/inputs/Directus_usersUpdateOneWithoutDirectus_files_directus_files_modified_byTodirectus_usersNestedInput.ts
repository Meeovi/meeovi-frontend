import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateOrConnectWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_usersCreateOrConnectWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput";
import { Directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput";
import { Directus_usersUpdateToOneWithWhereWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_usersUpdateToOneWithWhereWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput";
import { Directus_usersUpsertWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_usersUpsertWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput";
import { Directus_usersWhereInput } from "../inputs/Directus_usersWhereInput";
import { Directus_usersWhereUniqueInput } from "../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_usersUpdateOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersNestedInput", {})
export class Directus_usersUpdateOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersNestedInput {
  @TypeGraphQL.Field(_type => Directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput, {
    nullable: true
  })
  create?: Directus_usersCreateWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateOrConnectWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput, {
    nullable: true
  })
  connectOrCreate?: Directus_usersCreateOrConnectWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersUpsertWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput, {
    nullable: true
  })
  upsert?: Directus_usersUpsertWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  disconnect?: Directus_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  delete?: Directus_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersWhereUniqueInput, {
    nullable: true
  })
  connect?: Directus_usersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersUpdateToOneWithWhereWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput, {
    nullable: true
  })
  update?: Directus_usersUpdateToOneWithWhereWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput | undefined;
}
