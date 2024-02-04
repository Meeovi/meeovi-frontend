import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutMedia_translationInput } from "../inputs/MediaCreateOrConnectWithoutMedia_translationInput";
import { MediaCreateWithoutMedia_translationInput } from "../inputs/MediaCreateWithoutMedia_translationInput";
import { MediaUpdateToOneWithWhereWithoutMedia_translationInput } from "../inputs/MediaUpdateToOneWithWhereWithoutMedia_translationInput";
import { MediaUpsertWithoutMedia_translationInput } from "../inputs/MediaUpsertWithoutMedia_translationInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneRequiredWithoutMedia_translationNestedInput", {})
export class MediaUpdateOneRequiredWithoutMedia_translationNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutMedia_translationInput, {
    nullable: true
  })
  create?: MediaCreateWithoutMedia_translationInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutMedia_translationInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutMedia_translationInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutMedia_translationInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutMedia_translationInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutMedia_translationInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutMedia_translationInput | undefined;
}
