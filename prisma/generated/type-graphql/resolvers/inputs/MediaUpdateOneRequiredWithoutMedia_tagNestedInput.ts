import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutMedia_tagInput } from "../inputs/MediaCreateOrConnectWithoutMedia_tagInput";
import { MediaCreateWithoutMedia_tagInput } from "../inputs/MediaCreateWithoutMedia_tagInput";
import { MediaUpdateToOneWithWhereWithoutMedia_tagInput } from "../inputs/MediaUpdateToOneWithWhereWithoutMedia_tagInput";
import { MediaUpsertWithoutMedia_tagInput } from "../inputs/MediaUpsertWithoutMedia_tagInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneRequiredWithoutMedia_tagNestedInput", {})
export class MediaUpdateOneRequiredWithoutMedia_tagNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutMedia_tagInput, {
    nullable: true
  })
  create?: MediaCreateWithoutMedia_tagInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutMedia_tagInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutMedia_tagInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutMedia_tagInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutMedia_tagInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutMedia_tagInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutMedia_tagInput | undefined;
}
