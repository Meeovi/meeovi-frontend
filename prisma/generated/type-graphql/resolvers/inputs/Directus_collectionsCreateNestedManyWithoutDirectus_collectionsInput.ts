import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsCreateManyDirectus_collectionsInputEnvelope } from "../inputs/Directus_collectionsCreateManyDirectus_collectionsInputEnvelope";
import { Directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput } from "../inputs/Directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput";
import { Directus_collectionsCreateWithoutDirectus_collectionsInput } from "../inputs/Directus_collectionsCreateWithoutDirectus_collectionsInput";
import { Directus_collectionsWhereUniqueInput } from "../inputs/Directus_collectionsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_collectionsCreateNestedManyWithoutDirectus_collectionsInput", {})
export class Directus_collectionsCreateNestedManyWithoutDirectus_collectionsInput {
  @TypeGraphQL.Field(_type => [Directus_collectionsCreateWithoutDirectus_collectionsInput], {
    nullable: true
  })
  create?: Directus_collectionsCreateWithoutDirectus_collectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput], {
    nullable: true
  })
  connectOrCreate?: Directus_collectionsCreateOrConnectWithoutDirectus_collectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsCreateManyDirectus_collectionsInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_collectionsCreateManyDirectus_collectionsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_collectionsWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_collectionsWhereUniqueInput[] | undefined;
}
