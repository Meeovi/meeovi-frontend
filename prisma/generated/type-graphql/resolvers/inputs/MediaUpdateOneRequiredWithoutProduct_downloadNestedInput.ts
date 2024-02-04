import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutProduct_downloadInput } from "../inputs/MediaCreateOrConnectWithoutProduct_downloadInput";
import { MediaCreateWithoutProduct_downloadInput } from "../inputs/MediaCreateWithoutProduct_downloadInput";
import { MediaUpdateToOneWithWhereWithoutProduct_downloadInput } from "../inputs/MediaUpdateToOneWithWhereWithoutProduct_downloadInput";
import { MediaUpsertWithoutProduct_downloadInput } from "../inputs/MediaUpsertWithoutProduct_downloadInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneRequiredWithoutProduct_downloadNestedInput", {})
export class MediaUpdateOneRequiredWithoutProduct_downloadNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_downloadInput, {
    nullable: true
  })
  create?: MediaCreateWithoutProduct_downloadInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutProduct_downloadInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutProduct_downloadInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutProduct_downloadInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutProduct_downloadInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutProduct_downloadInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutProduct_downloadInput | undefined;
}
