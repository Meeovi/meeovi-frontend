import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCreateManyDirectus_foldersInputEnvelope } from "../inputs/Directus_foldersCreateManyDirectus_foldersInputEnvelope";
import { Directus_foldersCreateOrConnectWithoutDirectus_foldersInput } from "../inputs/Directus_foldersCreateOrConnectWithoutDirectus_foldersInput";
import { Directus_foldersCreateWithoutDirectus_foldersInput } from "../inputs/Directus_foldersCreateWithoutDirectus_foldersInput";
import { Directus_foldersWhereUniqueInput } from "../inputs/Directus_foldersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_foldersCreateNestedManyWithoutDirectus_foldersInput", {})
export class Directus_foldersCreateNestedManyWithoutDirectus_foldersInput {
  @TypeGraphQL.Field(_type => [Directus_foldersCreateWithoutDirectus_foldersInput], {
    nullable: true
  })
  create?: Directus_foldersCreateWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersCreateOrConnectWithoutDirectus_foldersInput], {
    nullable: true
  })
  connectOrCreate?: Directus_foldersCreateOrConnectWithoutDirectus_foldersInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersCreateManyDirectus_foldersInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_foldersCreateManyDirectus_foldersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_foldersWhereUniqueInput[] | undefined;
}
