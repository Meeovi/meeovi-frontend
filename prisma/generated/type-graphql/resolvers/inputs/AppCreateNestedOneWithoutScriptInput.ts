import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutScriptInput } from "../inputs/AppCreateOrConnectWithoutScriptInput";
import { AppCreateWithoutScriptInput } from "../inputs/AppCreateWithoutScriptInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedOneWithoutScriptInput", {})
export class AppCreateNestedOneWithoutScriptInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutScriptInput, {
    nullable: true
  })
  create?: AppCreateWithoutScriptInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutScriptInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutScriptInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;
}
