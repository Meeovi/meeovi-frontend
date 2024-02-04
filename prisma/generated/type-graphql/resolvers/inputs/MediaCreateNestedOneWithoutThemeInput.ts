import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutThemeInput } from "../inputs/MediaCreateOrConnectWithoutThemeInput";
import { MediaCreateWithoutThemeInput } from "../inputs/MediaCreateWithoutThemeInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutThemeInput", {})
export class MediaCreateNestedOneWithoutThemeInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutThemeInput, {
    nullable: true
  })
  create?: MediaCreateWithoutThemeInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutThemeInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutThemeInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
