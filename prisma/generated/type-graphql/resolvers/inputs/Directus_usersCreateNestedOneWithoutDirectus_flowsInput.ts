import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateOrConnectWithoutDirectus_flowsInput } from "../inputs/Directus_usersCreateOrConnectWithoutDirectus_flowsInput";
import { Directus_usersCreateWithoutDirectus_flowsInput } from "../inputs/Directus_usersCreateWithoutDirectus_flowsInput";
import { Directus_usersWhereUniqueInput } from "../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_usersCreateNestedOneWithoutDirectus_flowsInput", {})
export class Directus_usersCreateNestedOneWithoutDirectus_flowsInput {
  @TypeGraphQL.Field(_type => Directus_usersCreateWithoutDirectus_flowsInput, {
    nullable: true
  })
  create?: Directus_usersCreateWithoutDirectus_flowsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateOrConnectWithoutDirectus_flowsInput, {
    nullable: true
  })
  connectOrCreate?: Directus_usersCreateOrConnectWithoutDirectus_flowsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersWhereUniqueInput, {
    nullable: true
  })
  connect?: Directus_usersWhereUniqueInput | undefined;
}
