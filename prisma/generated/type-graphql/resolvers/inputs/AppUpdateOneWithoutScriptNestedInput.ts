import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutScriptInput } from "../inputs/AppCreateOrConnectWithoutScriptInput";
import { AppCreateWithoutScriptInput } from "../inputs/AppCreateWithoutScriptInput";
import { AppUpdateToOneWithWhereWithoutScriptInput } from "../inputs/AppUpdateToOneWithWhereWithoutScriptInput";
import { AppUpsertWithoutScriptInput } from "../inputs/AppUpsertWithoutScriptInput";
import { AppWhereInput } from "../inputs/AppWhereInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneWithoutScriptNestedInput", {})
export class AppUpdateOneWithoutScriptNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutScriptInput, {
    nullable: true
  })
  create?: AppCreateWithoutScriptInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutScriptInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutScriptInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutScriptInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutScriptInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  disconnect?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  delete?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutScriptInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutScriptInput | undefined;
}
