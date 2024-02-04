import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsCreateManyDirectus_collectionsInputEnvelope } from "../inputs/Directus_collectionsCreateManyDirectus_collectionsInputEnvelope";
import { Directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput } from "../inputs/Directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput";
import { Directus_collectionsCreateWithoutDirectus_collectionsInput } from "../inputs/Directus_collectionsCreateWithoutDirectus_collectionsInput";
import { Directus_collectionsScalarWhereInput } from "../inputs/Directus_collectionsScalarWhereInput";
import { Directus_collectionsUpdateManyWithWhereWithoutDirectus_collectionsInput } from "../inputs/Directus_collectionsUpdateManyWithWhereWithoutDirectus_collectionsInput";
import { Directus_collectionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput } from "../inputs/Directus_collectionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput";
import { Directus_collectionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput } from "../inputs/Directus_collectionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput";
import { Directus_collectionsWhereUniqueInput } from "../inputs/Directus_collectionsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_collectionsUpdateManyWithoutDirectus_collectionsNestedInput", {})
export class Directus_collectionsUpdateManyWithoutDirectus_collectionsNestedInput {
  @TypeGraphQL.Field(_type => [Directus_collectionsCreateWithoutDirectus_collectionsInput], {
    nullable: true
  })
  create?: Directus_collectionsCreateWithoutDirectus_collectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput], {
    nullable: true
  })
  connectOrCreate?: Directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput], {
    nullable: true
  })
  upsert?: Directus_collectionsUpsertWithWhereUniqueWithoutDirectus_collectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsCreateManyDirectus_collectionsInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_collectionsCreateManyDirectus_collectionsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsWhereUniqueInput], {
    nullable: true
  })
  set?: Directus_collectionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Directus_collectionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsWhereUniqueInput], {
    nullable: true
  })
  delete?: Directus_collectionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_collectionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput], {
    nullable: true
  })
  update?: Directus_collectionsUpdateWithWhereUniqueWithoutDirectus_collectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsUpdateManyWithWhereWithoutDirectus_collectionsInput], {
    nullable: true
  })
  updateMany?: Directus_collectionsUpdateManyWithWhereWithoutDirectus_collectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Directus_collectionsScalarWhereInput[] | undefined;
}
