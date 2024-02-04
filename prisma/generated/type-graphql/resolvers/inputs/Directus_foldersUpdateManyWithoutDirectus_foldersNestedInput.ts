import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCreateManyDirectus_foldersInputEnvelope } from "../inputs/Directus_foldersCreateManyDirectus_foldersInputEnvelope";
import { Directus_foldersCreateOrConnectWithoutDirectus_foldersInput } from "../inputs/Directus_foldersCreateOrConnectWithoutDirectus_foldersInput";
import { Directus_foldersCreateWithoutDirectus_foldersInput } from "../inputs/Directus_foldersCreateWithoutDirectus_foldersInput";
import { Directus_foldersScalarWhereInput } from "../inputs/Directus_foldersScalarWhereInput";
import { Directus_foldersUpdateManyWithWhereWithoutDirectus_foldersInput } from "../inputs/Directus_foldersUpdateManyWithWhereWithoutDirectus_foldersInput";
import { Directus_foldersUpdateWithWhereUniqueWithoutDirectus_foldersInput } from "../inputs/Directus_foldersUpdateWithWhereUniqueWithoutDirectus_foldersInput";
import { Directus_foldersUpsertWithWhereUniqueWithoutDirectus_foldersInput } from "../inputs/Directus_foldersUpsertWithWhereUniqueWithoutDirectus_foldersInput";
import { Directus_foldersWhereUniqueInput } from "../inputs/Directus_foldersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_foldersUpdateManyWithoutDirectus_foldersNestedInput", {})
export class Directus_foldersUpdateManyWithoutDirectus_foldersNestedInput {
  @TypeGraphQL.Field(_type => [Directus_foldersCreateWithoutDirectus_foldersInput], {
    nullable: true
  })
  create?: Directus_foldersCreateWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersCreateOrConnectWithoutDirectus_foldersInput], {
    nullable: true
  })
  connectOrCreate?: Directus_foldersCreateOrConnectWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersUpsertWithWhereUniqueWithoutDirectus_foldersInput], {
    nullable: true
  })
  upsert?: Directus_foldersUpsertWithWhereUniqueWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersCreateManyDirectus_foldersInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_foldersCreateManyDirectus_foldersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersWhereUniqueInput], {
    nullable: true
  })
  set?: Directus_foldersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Directus_foldersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersWhereUniqueInput], {
    nullable: true
  })
  delete?: Directus_foldersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_foldersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersUpdateWithWhereUniqueWithoutDirectus_foldersInput], {
    nullable: true
  })
  update?: Directus_foldersUpdateWithWhereUniqueWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersUpdateManyWithWhereWithoutDirectus_foldersInput], {
    nullable: true
  })
  updateMany?: Directus_foldersUpdateManyWithWhereWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Directus_foldersScalarWhereInput[] | undefined;
}
