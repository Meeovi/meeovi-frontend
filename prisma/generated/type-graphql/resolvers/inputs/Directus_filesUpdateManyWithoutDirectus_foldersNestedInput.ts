import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesCreateManyDirectus_foldersInputEnvelope } from "../inputs/Directus_filesCreateManyDirectus_foldersInputEnvelope";
import { Directus_filesCreateOrConnectWithoutDirectus_foldersInput } from "../inputs/Directus_filesCreateOrConnectWithoutDirectus_foldersInput";
import { Directus_filesCreateWithoutDirectus_foldersInput } from "../inputs/Directus_filesCreateWithoutDirectus_foldersInput";
import { Directus_filesScalarWhereInput } from "../inputs/Directus_filesScalarWhereInput";
import { Directus_filesUpdateManyWithWhereWithoutDirectus_foldersInput } from "../inputs/Directus_filesUpdateManyWithWhereWithoutDirectus_foldersInput";
import { Directus_filesUpdateWithWhereUniqueWithoutDirectus_foldersInput } from "../inputs/Directus_filesUpdateWithWhereUniqueWithoutDirectus_foldersInput";
import { Directus_filesUpsertWithWhereUniqueWithoutDirectus_foldersInput } from "../inputs/Directus_filesUpsertWithWhereUniqueWithoutDirectus_foldersInput";
import { Directus_filesWhereUniqueInput } from "../inputs/Directus_filesWhereUniqueInput";

@TypeGraphQL.InputType("Directus_filesUpdateManyWithoutDirectus_foldersNestedInput", {})
export class Directus_filesUpdateManyWithoutDirectus_foldersNestedInput {
  @TypeGraphQL.Field(_type => [Directus_filesCreateWithoutDirectus_foldersInput], {
    nullable: true
  })
  create?: Directus_filesCreateWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesCreateOrConnectWithoutDirectus_foldersInput], {
    nullable: true
  })
  connectOrCreate?: Directus_filesCreateOrConnectWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesUpsertWithWhereUniqueWithoutDirectus_foldersInput], {
    nullable: true
  })
  upsert?: Directus_filesUpsertWithWhereUniqueWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_filesCreateManyDirectus_foldersInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_filesCreateManyDirectus_foldersInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Directus_filesUpdateWithWhereUniqueWithoutDirectus_foldersInput], {
    nullable: true
  })
  update?: Directus_filesUpdateWithWhereUniqueWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesUpdateManyWithWhereWithoutDirectus_foldersInput], {
    nullable: true
  })
  updateMany?: Directus_filesUpdateManyWithWhereWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Directus_filesScalarWhereInput[] | undefined;
}
