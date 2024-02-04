import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateOrConnectWithoutDirectus_dashboardsInput } from "../inputs/Directus_usersCreateOrConnectWithoutDirectus_dashboardsInput";
import { Directus_usersCreateWithoutDirectus_dashboardsInput } from "../inputs/Directus_usersCreateWithoutDirectus_dashboardsInput";
import { Directus_usersUpdateToOneWithWhereWithoutDirectus_dashboardsInput } from "../inputs/Directus_usersUpdateToOneWithWhereWithoutDirectus_dashboardsInput";
import { Directus_usersUpsertWithoutDirectus_dashboardsInput } from "../inputs/Directus_usersUpsertWithoutDirectus_dashboardsInput";
import { Directus_usersWhereInput } from "../inputs/Directus_usersWhereInput";
import { Directus_usersWhereUniqueInput } from "../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_usersUpdateOneWithoutDirectus_dashboardsNestedInput", {})
export class Directus_usersUpdateOneWithoutDirectus_dashboardsNestedInput {
  @TypeGraphQL.Field(_type => Directus_usersCreateWithoutDirectus_dashboardsInput, {
    nullable: true
  })
  create?: Directus_usersCreateWithoutDirectus_dashboardsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateOrConnectWithoutDirectus_dashboardsInput, {
    nullable: true
  })
  connectOrCreate?: Directus_usersCreateOrConnectWithoutDirectus_dashboardsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersUpsertWithoutDirectus_dashboardsInput, {
    nullable: true
  })
  upsert?: Directus_usersUpsertWithoutDirectus_dashboardsInput | undefined;

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

  @TypeGraphQL.Field(_type => Directus_usersUpdateToOneWithWhereWithoutDirectus_dashboardsInput, {
    nullable: true
  })
  update?: Directus_usersUpdateToOneWithWhereWithoutDirectus_dashboardsInput | undefined;
}
