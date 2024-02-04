import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesCreateManyDirectus_foldersInputEnvelope } from "../inputs/Directus_filesCreateManyDirectus_foldersInputEnvelope";
import { Directus_filesCreateOrConnectWithoutDirectus_foldersInput } from "../inputs/Directus_filesCreateOrConnectWithoutDirectus_foldersInput";
import { Directus_filesCreateWithoutDirectus_foldersInput } from "../inputs/Directus_filesCreateWithoutDirectus_foldersInput";
import { Directus_filesWhereUniqueInput } from "../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.InputType("Directus_filesCreateNestedManyWithoutDirectus_foldersInput", {})
export class Directus_filesCreateNestedManyWithoutDirectus_foldersInput {
  @TypeGraphQL.Field(_type => [Directus_filesCreateWithoutDirectus_foldersInput], {
    nullable: true
  })
  create?: Directus_filesCreateWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesCreateOrConnectWithoutDirectus_foldersInput], {
    nullable: true
  })
  connectOrCreate?: Directus_filesCreateOrConnectWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_filesCreateManyDirectus_foldersInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_filesCreateManyDirectus_foldersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_filesWhereUniqueInput[] | undefined;
}
