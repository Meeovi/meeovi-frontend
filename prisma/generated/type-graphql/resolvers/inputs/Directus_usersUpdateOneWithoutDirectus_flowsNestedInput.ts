import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateOrConnectWithoutDirectus_flowsInput } from "../inputs/Directus_usersCreateOrConnectWithoutDirectus_flowsInput";
import { Directus_usersCreateWithoutDirectus_flowsInput } from "../inputs/Directus_usersCreateWithoutDirectus_flowsInput";
import { Directus_usersUpdateToOneWithWhereWithoutDirectus_flowsInput } from "../inputs/Directus_usersUpdateToOneWithWhereWithoutDirectus_flowsInput";
import { Directus_usersUpsertWithoutDirectus_flowsInput } from "../inputs/Directus_usersUpsertWithoutDirectus_flowsInput";
import { Directus_usersWhereInput } from "../inputs/Directus_usersWhereInput";
import { Directus_usersWhereUniqueInput } from "../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_usersUpdateOneWithoutDirectus_flowsNestedInput", {})
export class Directus_usersUpdateOneWithoutDirectus_flowsNestedInput {
  @TypeGraphQL.Field(_type => Directus_usersCreateWithoutDirectus_flowsInput, {
    nullable: true
  })
  create?: Directus_usersCreateWithoutDirectus_flowsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateOrConnectWithoutDirectus_flowsInput, {
    nullable: true
  })
  connectOrCreate?: Directus_usersCreateOrConnectWithoutDirectus_flowsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersUpsertWithoutDirectus_flowsInput, {
    nullable: true
  })
  upsert?: Directus_usersUpsertWithoutDirectus_flowsInput | undefined;

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

  @TypeGraphQL.Field(_type => Directus_usersUpdateToOneWithWhereWithoutDirectus_flowsInput, {
    nullable: true
  })
  update?: Directus_usersUpdateToOneWithWhereWithoutDirectus_flowsInput | undefined;
}
