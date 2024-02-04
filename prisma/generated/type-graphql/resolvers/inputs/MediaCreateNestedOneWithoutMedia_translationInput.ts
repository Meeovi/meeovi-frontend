import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutMedia_translationInput } from "../inputs/MediaCreateOrConnectWithoutMedia_translationInput";
import { MediaCreateWithoutMedia_translationInput } from "../inputs/MediaCreateWithoutMedia_translationInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutMedia_translationInput", {})
export class MediaCreateNestedOneWithoutMedia_translationInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutMedia_translationInput, {
    nullable: true
  })
  create?: MediaCreateWithoutMedia_translationInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutMedia_translationInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutMedia_translationInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
